interface ProductsValidate {
    firstName: string,
    lastName: string,
    email: string,
    favoriteColor: string,
    notes: string,
}

export default function(values) {
    const errors = {
        firstName: '',
        lastName: '',
        email: '',
        favoriteColor: '',
        notes: '',
    }
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'favoriteColor',
      'notes',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }
  