import {
  makeHash,
  checkLocalStorageField,
  updateLocalStorage,
} from "utils/tools";

export default {
  namespaced: true,
  state: {
    windows: defaultWindows(13),
  },
  getters: {
    getWindowById(state) {
      return (id) => {
        return state.windows.find(({ id: _id }) => id === _id);
      };
    },
  },
  mutations: {
    SET_WINDOW_DATA(state, data) {
      const index = state.windows.findIndex(({ id: _id }) => _id === data.id);
      state.windows[index] = { ...state.windows[index], ...data };
      updateLocalStorage("invester.desktop", state);
    },
  },
  actions: {},
};

function defaultWindows(
  count,
  { width, height, hidden } = {
    width: 200,
    height: 100,
    hidden: false,
  }
) {
  const localDesktop = checkLocalStorageField("invester.desktop");

  if (localDesktop) {
    return localDesktop;
  }

  const cleanDesktop = new Array(count).fill({}).map((item, i) => {
    const id = makeHash();
    const initialPosition = getInitialPosition(i, count, width, height);

    return {
      width,
      height,
      hidden,
      id,
      i,
      title: `Window ${i} with ID ${id}`,
      x: initialPosition.x,
      y: initialPosition.y,
    };
  });

  updateLocalStorage("invester.desktop", cleanDesktop);

  return cleanDesktop;
}

function getInitialPosition(i, count, width, height) {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  const winPerRow = Math.floor(vw / width);
  const rowNum = Math.floor(i / winPerRow);
  const numInRow = i % winPerRow;

  console.log({
    winPerRow,
    rowNum,
    numInRow,
    i,
    count,
  });

  const x = numInRow * (width + 10);
  const y = rowNum * (height / 2);

  return { x, y };
}
