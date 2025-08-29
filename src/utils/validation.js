// Validation utilities for portfolio configuration

export const validatePortfolioConfig = (config) => {
  const errors = [];
  const warnings = [];

  // Validate personal information
  if (!config.personal) {
    errors.push("Personal information is required");
  } else {
    if (!config.personal.name || config.personal.name.trim() === "") {
      errors.push("Personal name is required");
    }
    if (!config.personal.title || config.personal.title.trim() === "") {
      warnings.push("Personal title is recommended");
    }
    if (!config.personal.description || config.personal.description.trim() === "") {
      warnings.push("Personal description is recommended");
    }
  }

  // Validate projects
  if (!config.projects || !Array.isArray(config.projects)) {
    warnings.push("Projects array is recommended");
  } else if (config.projects.length === 0) {
    warnings.push("At least one project is recommended");
  } else {
    config.projects.forEach((project, index) => {
      if (!project.title) {
        errors.push(`Project ${index + 1}: Title is required`);
      }
      if (!project.description) {
        warnings.push(`Project ${index + 1}: Description is recommended`);
      }
      if (project.link && !isValidUrl(project.link)) {
        warnings.push(`Project ${index + 1}: Invalid URL format`);
      }
    });
  }

  // Validate experience
  if (!config.experience || !Array.isArray(config.experience)) {
    warnings.push("Experience array is recommended");
  } else {
    config.experience.forEach((exp, index) => {
      if (!exp.title) {
        warnings.push(`Experience ${index + 1}: Job title is recommended`);
      }
      if (!exp.employer) {
        warnings.push(`Experience ${index + 1}: Employer is recommended`);
      }
    });
  }

  // Validate contact information
  if (!config.contact) {
    warnings.push("Contact information is recommended");
  } else {
    if (config.contact.email && !isValidEmail(config.contact.email)) {
      errors.push("Invalid email format");
    }
    if (config.contact.linkedIn && !isValidUrl(config.contact.linkedIn)) {
      warnings.push("Invalid LinkedIn URL format");
    }
    if (config.contact.github && !isValidUrl(config.contact.github)) {
      warnings.push("Invalid GitHub URL format");
    }
  }

  return { errors, warnings, isValid: errors.length === 0 };
};

// Helper functions
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Asset validation
export const validateAssets = (config) => {
  const missingAssets = [];
  
  // Check if avatar exists
  if (config.personal?.avatar && !config.personal.avatar.startsWith('http')) {
    // For local assets, we can't check existence in browser, but we can warn about common issues
    if (!config.personal.avatar.startsWith('/assets/')) {
      missingAssets.push('Avatar should be in /public/assets/ folder');
    }
  }

  // Check project images
  config.projects?.forEach((project, index) => {
    if (project.image && !project.image.startsWith('http') && !project.image.startsWith('/assets/')) {
      missingAssets.push(`Project ${index + 1} image should be in /public/assets/ folder`);
    }
  });

  return missingAssets;
};

// Development helper to log validation results
export const logValidationResults = (config) => {
  if (process.env.NODE_ENV === 'development') {
    const validation = validatePortfolioConfig(config);
    const assetWarnings = validateAssets(config);

    if (validation.errors.length > 0) {
      console.error('❌ Portfolio Configuration Errors:', validation.errors);
    }
    
    if (validation.warnings.length > 0) {
      console.warn('⚠️ Portfolio Configuration Warnings:', validation.warnings);
    }
    
    if (assetWarnings.length > 0) {
      console.warn('📁 Asset Warnings:', assetWarnings);
    }

    if (validation.isValid && validation.warnings.length === 0 && assetWarnings.length === 0) {
      console.log('✅ Portfolio configuration is valid!');
    }
  }
};
