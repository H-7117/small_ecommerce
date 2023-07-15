import React from 'react'
import Pagination from '../../Components/utility/Pagination'
import BrandContainer from '../../Components/Brand/BrandContainer'

const AllBrandPage = () => {
  return (
    <div>
        <div style={{minHeight:"600px"}}>
      <BrandContainer/>
      <Pagination />
    </div>
    </div>
  )
}

export default AllBrandPage