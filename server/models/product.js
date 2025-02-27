const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: String,
    sizes: [String],
    colors: [String]
  });
  module.exports = mongoose.model('Product', productSchema);