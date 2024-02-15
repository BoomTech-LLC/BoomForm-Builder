import React from 'react'
import './index.css'
function Sidebar({ example, setExample }) {
  const listItems = [
    { name: 'Logic', option: 'logic' },
    { name: 'Pagination', option: 'pagination' },
    { name: 'Pagination / Logic', option: 'paginationAndLogic' },
    {
      name: 'Grid Options',
      option: 'grid'
    },
    {
      name: 'Grid / Logic',
      option: 'gridAndLogic'
    },
    {
      name: 'Grid / Pagination',
      option: 'gridAndPagination'
    },
    {
      name: 'Grid / Pagination / Logic',
      option: 'gridAndPagination'
    }
  ]

  const handler = (item) => {
    setExample(item)
  }

  return (
    <aside className='sidebar'>
      {listItems.map((item, index) => {
        return (
          <div
            key={`item_${index}`}
            className={`sidebarItem ${
              item.name === example.name ? 'active' : ''
            }`}
            onClick={() => {
              handler(item)
            }}
          >
            <h1> {item.name} </h1>
          </div>
        )
      })}
    </aside>
  )
}

export default Sidebar
