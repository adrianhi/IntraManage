export function arrayBufferToString(buffer: ArrayBufferLike) {
  const decoder = new TextDecoder("utf-8");
  const decodedString = decoder.decode(new Uint8Array(buffer));
  // const arr = new Uint8Array(buffer);
  // const str = String.fromCharCode.apply(String, arr);
  // if (/[\u0080-\uffff]/.test(decodedString)) {
  //   throw new Error("this string seems to contain (still encoded) multibytes");
  // }
  return decodedString;
}

export const convertBase64 = (file: File | null) => {
  if (file == null) return false;
  return new Promise((resolve: (value: any) => void, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);

    fileReader.onerror = (err) => reject(err);
  });
};
