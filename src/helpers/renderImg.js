export const renderImg = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file[0]);
    reader.onloadend = () => {
      return reader.result;
    }

}
