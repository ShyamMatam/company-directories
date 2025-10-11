import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCompanies } from '../api';

export const getCompanies = createAsyncThunk(
  'companies/getCompanies',
  async () => {
    const response = await fetchCompanies();
    return response.data;
  }
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    data: [],
    filteredData: [],
    paginatedData: [],
    loading: false,
    error: null,
    filters: {
      search: '',
      location: '',
      industry: '',
    },
    pagination: {
      currentPage: 1,
      itemsPerPage: 9,
      totalPages: 1,
    },
    sortBy: 'name',
    sortOrder: 'asc',
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1;
      companiesSlice.caseReducers.applyFiltersAndPagination(state);
    },
    setSorting: (state, action) => {
      const { sortBy, sortOrder } = action.payload;
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
      companiesSlice.caseReducers.applyFiltersAndPagination(state);
    },
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
      companiesSlice.caseReducers.applyFiltersAndPagination(state);
    },
    setItemsPerPage: (state, action) => {
      state.pagination.itemsPerPage = action.payload;
      state.pagination.currentPage = 1;
      companiesSlice.caseReducers.applyFiltersAndPagination(state);
    },
    applyFiltersAndPagination: (state) => {
      // Filter data
      state.filteredData = state.data.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(state.filters.search.toLowerCase());
        const companyLocation = `${company.location.city}, ${company.location.country}`;
        const matchesLocation = !state.filters.location || companyLocation === state.filters.location;
        const matchesIndustry = !state.filters.industry || company.industry === state.filters.industry;
        return matchesSearch && matchesLocation && matchesIndustry;
      });
      
      // Sort data
      state.filteredData.sort((a, b) => {
        let aValue = a[state.sortBy];
        let bValue = b[state.sortBy];
        
        if (state.sortBy === 'location') {
          aValue = `${a.location.city}, ${a.location.country}`;
          bValue = `${b.location.city}, ${b.location.country}`;
        }
        
        if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (state.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
      
      // Calculate pagination
      state.pagination.totalPages = Math.ceil(state.filteredData.length / state.pagination.itemsPerPage);
      const startIndex = (state.pagination.currentPage - 1) * state.pagination.itemsPerPage;
      const endIndex = startIndex + state.pagination.itemsPerPage;
      state.paginatedData = state.filteredData.slice(startIndex, endIndex);
    },
    clearFilters: (state) => {
      state.filters = { search: '', location: '', industry: '' };
      state.pagination.currentPage = 1;
      companiesSlice.caseReducers.applyFiltersAndPagination(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        companiesSlice.caseReducers.applyFiltersAndPagination(state);
      })
      .addCase(getCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }); 
  },
});

export const { setFilters, clearFilters, setSorting, setPage, setItemsPerPage } = companiesSlice.actions;
export default companiesSlice.reducer;