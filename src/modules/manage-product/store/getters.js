const getLoading = (state) => state.loading;

const getListProducts = (state) => state.products;

const getListProductsFilter = (state) => state.filteredProducts;

const getTopSellingProducts = (state) => state.topSellingProducts;

export {
  getLoading,
  getListProducts,
  getListProductsFilter,
  getTopSellingProducts,
};
