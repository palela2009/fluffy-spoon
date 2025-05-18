import { Upload } from "lucide-react"

const VariantInfo = ({ variantForm, originalIndex }) => {
  return (
    <figure className="variant-info-wrapper">
      <label htmlFor="color">
        <p>Color Name</p>
        <input
          type="text"
          name="color"
          value={variantForm.values.color}
          onChange={variantForm.handleChange}
        />
      </label>

      <label htmlFor="quantity">
        <p>Stock Quantity</p>
        <input
          type="text"
          name="quantity"
          value={variantForm.values.quantity}
          onChange={variantForm.handleChange}
        />
      </label>

      <label htmlFor="add-images">
        <p>Images</p>

        <button type="button" id="upload-img-btn" onClick={() => {}}>
          <input
            type="file"
            accept="image/*"
            id={`file-upload${originalIndex}`}
            name="add-images"
            onChange={event => {
              const files = event.target.files
              Array.from(files).forEach(file => {
                addVariantImage(file)
              })
            }}
          />
          <Upload color="#71717a" /> Upload Images
        </button>
      </label>
    </figure>
  )
}

export default VariantInfo
