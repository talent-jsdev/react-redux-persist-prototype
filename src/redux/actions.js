//Action Types
export const INC_NUM = "INC_NUM";
export const DEC_NUM = "DEC_NUM";

//Action Creator
export const incNum = () => ({
  type: INC_NUM
});

export const decNum = () => ({
  type: DEC_NUM
});
