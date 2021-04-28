function underline(i) {
  let parHtm = i.innerHTML;
  const parArr = parHtm.split(/[\s,\.,\"]+/);

  parArr.forEach((wrd) => {
    if (wrd.length > 5) {
      parHtm = parHtm.split(wrd).join(`<u>${wrd}</u>`);
    }
  });

  i.innerHTML = parHtm;
}

export { underline };
