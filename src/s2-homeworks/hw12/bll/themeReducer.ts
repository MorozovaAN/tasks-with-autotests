const initState = {
  themeId: 1,
};

type StateType = {
  themeId: number;
};

export const themeReducer = (
  state: StateType = initState,
  action: ActionType
): StateType => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

type ActionType = ReturnType<typeof changeThemeId>;

export const changeThemeId = (id: number) => {
  return { type: "SET_THEME_ID", id } as const;
}; // fix any
