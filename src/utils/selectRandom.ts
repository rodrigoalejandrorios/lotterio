type ResultType = {
  result: Array<string>;
};

interface ParamsSelect {
  items: Array<string>;
  lengthWinners: number;
}

export const selectRandom = ({
  items,
  lengthWinners,
}: ParamsSelect): ResultType => {
  let result: Array<string> = [];
  let arr: Array<any> = [];

  for (let i = 0; i < lengthWinners; i++) {
    arr = items.filter((item) => !result.includes(item));
    if (arr.length > 0) {
      items = arr;
    }

    result = [...result, arr[Math.floor(Math.random() * arr.length)]];
  }

  return { result };
};
