var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
      userId: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      itemNumber: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      itemName: {
            type: String,
            trim: true,
            default: '',
            required:true
      },
      availableStock: {
            type: Number,
            trim: true,
            default: '',
            required: true,
      },
      minStockLimit: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },
      measuringUnit: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      purchasingCost: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },
      salePrice: {
            type: Number,
            trim: true,
            default: '',
            required: true
      }
});
mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');

var GroupSchema = new mongoose.Schema({
      userId: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      groupNumber: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      groupName: {
            type: String,
            trim: true,
            default: '',
            required:true
      },
      availableStock: {
            type: Number,
            trim: true,
            default: '',
            required: true,
      },
      minStockLimit: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },

      measuringUnit: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      purchasingCost: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },
      salePrice: {
            type: Number,
            trim: true,
            default: '',
            required: true
      }
});
mongoose.model('Group', GroupSchema);
module.exports = mongoose.model('Group');
