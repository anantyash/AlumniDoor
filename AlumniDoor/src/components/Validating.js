import * as Yup from "yup";

export const signupSchema = Yup.object({
  userType: Yup.string()
    .nonNullable()
    .required("Option must be selected")
    .matches(/[Alumni,Student]/),

  fullName: Yup.string()
    .strict()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .required("Name is required"),

  email: Yup.string().email().required("Invalid email format"),

  phoneNo: Yup.string().matches(
    /^[0-9]{10}$/,
    "Mobile number must be exactly 10 digits"
  ),
  graduationYear: Yup.number(),
  // degree: Yup.string().oneOf(courses, 'Invalid Course selected'),
  currentProfession: Yup.string().max(50, "Must be in 50 characters"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., !@#$%^&*)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm your Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  // profilePicture: Yup.mixed()
  //   .nullable()
  //   .test("fileSize", "File size is too large", (value) => {
  //     return value && value.size <= 5000000; // 5MB limit
  //   })
  //   .test("fileType", "Unsupported File Format", (value) => {
  //     return (
  //       value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
  //     );
  //   }),
  terms: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Invalid email format"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., !@#$%^&*)"
    )
    .required("Password is required"),
});

export const editUserSchema = Yup.object({
    userType: Yup.string()
      .nonNullable()
      .required("Option must be selected")
      .matches(/[Alumni,Student]/),

    fullName: Yup.string()
      .strict()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must be at most 50 characters long")
      .required("Name is required"),

    email: Yup.string().email().required("Invalid email format"),

    phoneNo: Yup.string().matches(
      /^[0-9]{10}$/,
      "Mobile number must be exactly 10 digits"
    ),
    graduationYear: Yup.number(),

    currentProfession: Yup.string().max(50, "Must be in 50 characters"),

    mentor: Yup.string(),

    company: Yup.string(),

    availability: Yup.string().matches(/[Not Available,Message]/),

    skill: Yup.array()
      .min(1, "At least one skill must be selected")
      .max(3, "You can select up to 3 skills"),
  });
