const formatDate = (value: string): string => {
    const date = new Date(value);
    return Intl.DateTimeFormat('pt').format(date);
  };
  
  export default formatDate;