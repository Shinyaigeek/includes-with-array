type targetArg = string | number | boolean;
type seachArg = string | number | boolean;

const includer = function(targetArg: targetArg[], seachArg: seachArg[]) {
  let resultBool = false;
  const resultMatch: seachArg[] = [];
  seachArg.forEach((arg: seachArg) => {
    if (targetArg.includes(arg)) {
      resultBool = true;
      resultMatch.push(arg);
    }
  });

  return {
    resultBool: resultBool,
    resultMatch: resultMatch
  };
};

export default includer;
