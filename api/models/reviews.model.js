import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    property: {
      name: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      zip: {
        type: String,
        required: true
      }
    }, // Corrected: Added closing bracket for the property object
    ratings: {
      maintenanceRating: Number,
      communicationRating: Number,
      rentFairness: Number,
      tenantPrivacy: Number,
      propertyCondition: Number,
      rentalStability: Number,
      
     
    }, 
    reviewText: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
