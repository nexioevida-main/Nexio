import { Schema, model } from "mongoose";

// ======================
// SUB SCHEMAS
// ======================
const skillSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
  },
  { _id: true }
);

const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { _id: true }
);

// ======================
// USER SCHEMA
// ======================
const usersSchema = new Schema(
  {
    // ======================
    // AUTH FIELDS
    // ======================
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-z0-9-]+$/,
        "Username can only contain lowercase letters, numbers, and hyphens",
      ],
    },

    gmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    role: {
      type: String,
      enum: ["user", "admin", "altimateAdmin"],
      default: "user",
    },

    // ======================
    // PROFILE INFO
    // ======================
    profile: {
      country: {
        type: String,
        trim: true,
      },
      street: {
        type: String,
        trim: true,
      },
      bio: {
        type: String,
        trim: true,
      },
    },

    // ======================
    // SKILLS & EXPERIENCE
    // ======================
    skills: [skillSchema],
    experience: [experienceSchema],

    // ======================
    // VERIFICATION & SECURITY
    // ======================
    otp: String,
    otpExpires: Date,
    isVerified: {
      type: Boolean,
      default: false,
    },
    lastOtpSentAt: Date,

    passwordResetToken: String,
    passwordResetExpires: Date,

    // ======================
    // ADMIN MODERATION
    // ======================
    isSuspended: {
      type: Boolean,
      default: false,
    },

    suspensionReason: {
      type: String,
    },

    // ======================
    // ANALYTICS
    // ======================
    profileViews: {
      type: Number,
      default: 0,
    },

    uniqueViewers: [
      {
        type: String, // hashed IP / visitor identifier
      },
    ],
  },
  { timestamps: true }
);

// ======================
// INDEXES (PERFORMANCE)
// ======================
usersSchema.index({ "profile.country": 1 });
usersSchema.index({ "skills.name": 1 });
usersSchema.index({ createdAt: -1 });

// 🔍 Text search (used in Day 4 search)
usersSchema.index({
  username: "text",
  "profile.bio": "text",
});

// ======================
// SECURITY CLEANUP
// ======================
usersSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.password;
  delete user.otp;
  delete user.passwordResetToken;
  delete user.passwordResetExpires;

  return user;
};

const User = model("User", usersSchema);

export default User;
