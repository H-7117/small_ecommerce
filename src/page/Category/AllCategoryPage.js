import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/utility/Pagination'

const AllCategoryPage = () => {
  return (
    <div style={{minHeight:"600px"}}>
      <CategoryContainer/>
      <Pagination />
    </div>
  )
}

export default AllCategoryPage