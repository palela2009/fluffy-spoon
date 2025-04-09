import "./dashboard.scss"

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Product Management</h1>

      <div className="summary">
        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon">📦</span>
            <h1 className="summary-title">Total products</h1>
          </div>
          <h2 className="summary-number">8</h2>
        </div>

        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon in-stock">✅</span>
            <h1 className="summary-title">In Stock</h1>
          </div>
          <h2 className="summary-number">3</h2>
        </div>

        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon low-stock">⚠️</span>
            <h1 className="summary-title">Low Stock</h1>
            <span className="summary-alert">Needs attention</span>
          </div>
          <h2 className="summary-number">3</h2>
        </div>

        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon out-of-stock">🚫</span>
            <h1 className="summary-title">Out of Stock</h1>
            <span className="summary-alert">Unavailable products</span>
          </div>
          <h2 className="summary-number">2</h2>
        </div>
      </div>

      <div className="table-controls">
        <div className="table-controls-left">
          <div className="search">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <select className="filter">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Apparel</option>
            <option>Furniture</option>
          </select>

          <select className="filter">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <button className="add-button">
          <span className="add-icon">+</span> Add Product
        </button>
      </div>

      <table className="product-table">
        <thead className="table-head">
          <tr className="table-row">
            <th className="table-header">Image</th>
            <th className="table-header">Product</th>
            <th className="table-header">Category</th>
            <th className="table-header">Price</th>
            <th className="table-header">Stock</th>
            <th className="table-header">Status</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="table-row">
            <td className="table-data">
              <img src="/placeholder.png" alt="Product" width={40} />
            </td>
            <td className="table-data">Wireless Mouse</td>
            <td className="table-data">Electronics</td>
            <td className="table-data">
              <span className="table-price-old">$39.99</span>$29.99
            </td>
            <td className="table-data">15</td>
            <td className="table-data">
              <span className="status in-stock">In Stock</span>
            </td>
            <td className="table-data">
              <span className="action-icon">✏️</span>
              <span className="action-icon">👁️</span>
              <span className="action-icon">🗑️</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
