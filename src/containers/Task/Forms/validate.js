export default function(values) {
    const errors = {};
    const requiredFields = [
      'taskName',
      'description',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    return errors;
  }