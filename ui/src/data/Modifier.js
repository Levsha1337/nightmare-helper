"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifiers = exports.calcAffect = exports.ModifierAffects = exports.ModifierInfluence = exports.ModifierType = void 0;
var ModifierType;
(function (ModifierType) {
    ModifierType["HUNT"] = "hunt";
    ModifierType["EVENT"] = "event";
    ModifierType["BEHAVIOUR"] = "behaviour";
})(ModifierType = exports.ModifierType || (exports.ModifierType = {}));
var ModifierInfluence;
(function (ModifierInfluence) {
    ModifierInfluence["NO_AFFECT"] = "no_affect";
    ModifierInfluence["EXCLUDES"] = "excludes";
    ModifierInfluence["VERY_UNLIKELY"] = "very_unlikely";
    ModifierInfluence["UNLIKELY"] = "unlikely";
    ModifierInfluence["LIKELY"] = "likely";
    ModifierInfluence["VERY_LIKELY"] = "very_likely";
    ModifierInfluence["ONLY"] = "only";
})(ModifierInfluence = exports.ModifierInfluence || (exports.ModifierInfluence = {}));
const ModifierAffectsArray = [
    {
        influence: ModifierInfluence.NO_AFFECT,
        name: 'Не влияет',
        mark: '-',
        markColor: 'black'
    },
    {
        influence: ModifierInfluence.EXCLUDES,
        name: 'Исключён',
        mark: '❌',
        markColor: 'red'
    },
    {
        influence: ModifierInfluence.VERY_UNLIKELY,
        name: 'Очень маловероятно',
        mark: '⇊',
        markColor: 'red'
    },
    {
        influence: ModifierInfluence.UNLIKELY,
        name: 'Маловероятно',
        mark: '↓',
        markColor: 'red'
    },
    {
        influence: ModifierInfluence.LIKELY,
        name: 'Вероятно',
        mark: '↑',
        markColor: 'green'
    },
    {
        influence: ModifierInfluence.VERY_LIKELY,
        name: 'Очень вероятно',
        mark: '⇈',
        markColor: 'green'
    },
    {
        influence: ModifierInfluence.ONLY,
        name: 'Подтверждён',
        mark: '✅',
        markColor: 'green'
    }
];
exports.ModifierAffects = {
    [ModifierInfluence.NO_AFFECT]: ModifierAffectsArray[0],
    [ModifierInfluence.EXCLUDES]: ModifierAffectsArray[1],
    [ModifierInfluence.VERY_UNLIKELY]: ModifierAffectsArray[2],
    [ModifierInfluence.UNLIKELY]: ModifierAffectsArray[3],
    [ModifierInfluence.LIKELY]: ModifierAffectsArray[4],
    [ModifierInfluence.VERY_LIKELY]: ModifierAffectsArray[5],
    [ModifierInfluence.ONLY]: ModifierAffectsArray[6]
};
const calcAffect = (affect) => {
    if (affect <= -1000) {
        return exports.ModifierAffects[ModifierInfluence.EXCLUDES];
    }
    if (affect <= -50) {
        return exports.ModifierAffects[ModifierInfluence.VERY_UNLIKELY];
    }
    if (affect <= -10) {
        return exports.ModifierAffects[ModifierInfluence.UNLIKELY];
    }
    if (affect >= 10) {
        return exports.ModifierAffects[ModifierInfluence.LIKELY];
    }
    if (affect >= 50) {
        return exports.ModifierAffects[ModifierInfluence.VERY_LIKELY];
    }
    if (affect >= 1000) {
        return exports.ModifierAffects[ModifierInfluence.ONLY];
    }
    return exports.ModifierAffects[ModifierInfluence.NO_AFFECT];
};
exports.calcAffect = calcAffect;
exports.Modifiers = {
    'EVENT_CLOUD': {
        type: ModifierType.EVENT,
        code: 'EVENT_CLOUD',
        value: 'Ивент "облачко"'
    },
    'EVENT_LAMP': {
        type: ModifierType.EVENT,
        code: 'EVENT_LAMP',
        value: 'Ивент "взрыв лампочки"'
    },
    'MAIN_DOOR_INTERACTION': {
        type: ModifierType.BEHAVIOUR,
        code: 'MAIN_DOOR_INTERACTION',
        value: 'Взаимодействие с входной дверью'
    },
    'RADIO_BREATH': {
        type: ModifierType.BEHAVIOUR,
        code: 'RADIO_BREATH',
        value: '"Дыхание" в радиоприёмник'
    },
    'ACTIVE_ITEMS_INTERACTION': {
        type: ModifierType.BEHAVIOUR,
        code: 'ACTIVE_ITEMS_INTERACTION',
        value: 'Активное кидание предметами'
    },
    'STRONG_ITEMS_INTERACTION': {
        type: ModifierType.BEHAVIOUR,
        code: 'STRONG_ITEMS_INTERACTION',
        value: 'Сильно брошенный предмет'
    }
};
