const INITIAL_STATE = { "mo": [{
  "bt": 240,
  "et": 779
}],
"tu": [],
"we": [],
"th": [ {"bt": 240,"et": 779}, { "bt": 1140, "et": 1319 }],
"fr": [{
  "bt": 660,
  "et": 1019
}],
"sa": [{
  "bt": 0,
  "et": 1439
}],
"su": []
}

export default function (state = INITIAL_STATE, action) {
switch (action.type) {
	case 'CURRENT_SCHEDULE': return action.payload;
	default: return state;
}
}

