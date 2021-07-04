export function formatPhoneNumber(phoneNumber) {
  let number = phoneNumber;
  if (phoneNumber === undefined) {
    number = '';
  }
  if (phoneNumber.length > 3 && phoneNumber.length < 7) {
    number = `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3, 6)}`;
  }
  if (phoneNumber.length >= 7 && phoneNumber.length <= 10) {
    number = `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
      3,
      6,
    )}-${phoneNumber.substring(6, 10)}`;
  }
  return number;
}

export const appendData = payload => {
  const formData = new FormData();
  Object.keys(payload).map((key, index) => {
    formData.append(key, payload[key]);
  });
  return formData;
};
