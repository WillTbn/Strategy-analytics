export default function useCase() {
  const serializeString = (e) => {
    return e.replace(/[-\s]+/g, "").toUpperCase();
  };

  //same as the other
  const same = (original, other) => {
    const seriOriginal = serializeString(original);
    const seriOther = serializeString(other);
    return seriOriginal == seriOther
  }

  return {
    serializeString,
    same
  }
} 
