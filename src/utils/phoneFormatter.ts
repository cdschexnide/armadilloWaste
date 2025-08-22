/**
 * Formats a phone number to (XXX) XXX-XXXX format
 * @param value - Raw phone number input
 * @returns Formatted phone number string
 */
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digits
  const phoneNumber = value.replace(/\D/g, '')
  
  // Limit to 10 digits (US phone numbers)
  const limitedPhoneNumber = phoneNumber.substring(0, 10)
  
  // Apply formatting based on length
  if (limitedPhoneNumber.length < 4) {
    return limitedPhoneNumber
  } else if (limitedPhoneNumber.length < 7) {
    return `(${limitedPhoneNumber.substring(0, 3)}) ${limitedPhoneNumber.substring(3)}`
  } else {
    return `(${limitedPhoneNumber.substring(0, 3)}) ${limitedPhoneNumber.substring(3, 6)}-${limitedPhoneNumber.substring(6)}`
  }
}

/**
 * Removes all formatting from phone number for consistent storage
 * @param formattedPhone - Formatted phone number string
 * @returns Clean digits-only phone number
 */
export const cleanPhoneNumber = (formattedPhone: string): string => {
  return formattedPhone.replace(/\D/g, '')
}

/**
 * Validates if phone number has correct length (10 digits for US)
 * @param phone - Phone number string (formatted or unformatted)
 * @returns Boolean indicating if phone number is valid
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const cleanPhone = cleanPhoneNumber(phone)
  return cleanPhone.length === 10
}