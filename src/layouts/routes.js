export const landingPagePath = "/";


export const userAccountBasePath = "/my-account";
export const userAccountRoutes = {
  profile: `${userAccountBasePath}/profile`,
  orders: `${userAccountBasePath}/orders`,
  addresses: `${userAccountBasePath}/addresses`,
  payments: `${userAccountBasePath}/payments`,
};

export const checkoutBasePath = "/checkout";
export const checkoutRoutes = {
  shipping: `${checkoutBasePath}/shipping`,
  payment: `${checkoutBasePath}/payment`,
//   review: `${checkoutBasePath}/review`,
  thanks: `${checkoutBasePath}/thank-you`,
};

export const sellerPortalBasePath = "/my-profile";
export const sellerPortalRoutes = {
  dashboard: `${sellerPortalBasePath}/dashboard`,
  orders: `${sellerPortalBasePath}/orders`,
  products: `${sellerPortalBasePath}/products`,
//   transactions: `${sellerPortalBasePath}/transactions`,
  shipping: `${sellerPortalBasePath}/shipping`,
//   reviews: `${sellerPortalBasePath}/reviews`,
  create: `${sellerPortalBasePath}/create-restaurant`,
//   settings: `${sellerPortalBasePath}/store-settings`,
};

export const shopAndCategoryPagePath = "/retaurant";
export const productDetailsPagePath = "/product/:name/:id";
export const cartPath = "/cart";
export const storePagePath = "/shop-page";
export const openShop = "/open-your-shop";
export const WizardPagesRoutes = {
  shopPreferences: `${sellerPortalRoutes.create}/shop-preference`,
  uploadImages: `${sellerPortalRoutes.create}/upload-images`,
  billings: `${sellerPortalRoutes.create}/billings`,
};
export const SellerProductListRoutes = {
  addProduct: `${sellerPortalRoutes.products}/add-product`,
};