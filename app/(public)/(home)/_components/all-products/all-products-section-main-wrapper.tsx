import React, { Fragment } from 'react';
import ProductsBreadCrumb from './products-breadcrumb';
import ProductListing from './product-listing';

const AllProductsSectionMainWrapper = () => {
  return (
    <Fragment>
      <ProductsBreadCrumb />
      <ProductListing />
    </Fragment>
  );
};

export default AllProductsSectionMainWrapper;
