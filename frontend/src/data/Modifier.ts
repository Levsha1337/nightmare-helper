/**
 * Список нестандартного поведения призраков, замеченного на моём опыте:
 * - Юрэй включил щиток
 * - Они взаимодействовал с щитком (2 ЭМП)
 * - Призрак заспавнился на распятии (вероятно, баг)
 * - Тайе ни разу не охотился до проклятой охоты (в возрасте 103 лет)
 */
export enum ModifierType {
    HUNT = 'hunt',
    EVENT = 'event',
    BEHAVIOUR = 'behaviour'
}

export type Modifier = {
    type: ModifierType;
    code: string;
    value: string;
}

export enum ModifierInfluence {
    NO_AFFECT = 'no_affect',
    EXCLUDES = 'excludes',
    VERY_UNLIKELY = 'very_unlikely',
    UNLIKELY = 'unlikely',
    LIKELY = 'likely',
    VERY_LIKELY = 'very_likely',
    ONLY = 'only'
}

export type ModifierAffect = {
    influence: ModifierInfluence;
    name: string;
    mark: string;
    markColor: string;
}

const ModifierAffectsArray: ModifierAffect[] = [
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

export const ModifierAffects = {
    [ModifierInfluence.NO_AFFECT]: ModifierAffectsArray[0],
    [ModifierInfluence.EXCLUDES]: ModifierAffectsArray[1],
    [ModifierInfluence.VERY_UNLIKELY]: ModifierAffectsArray[2],
    [ModifierInfluence.UNLIKELY]: ModifierAffectsArray[3],
    [ModifierInfluence.LIKELY]: ModifierAffectsArray[4],
    [ModifierInfluence.VERY_LIKELY]: ModifierAffectsArray[5],
    [ModifierInfluence.ONLY]: ModifierAffectsArray[6]
};

export const calcAffect = (affect: number): ModifierAffect => {
    if (affect <= -1000) {
        return ModifierAffects[ModifierInfluence.EXCLUDES]
    }

    if (affect <= -50) {
        return ModifierAffects[ModifierInfluence.VERY_UNLIKELY]
    }

    if (affect <= -10) {
        return ModifierAffects[ModifierInfluence.UNLIKELY]
    }

    if (affect >= 10) {
        return ModifierAffects[ModifierInfluence.LIKELY]
    }

    if (affect >= 50) {
        return ModifierAffects[ModifierInfluence.VERY_LIKELY]
    }

    if (affect >= 1000) {
        return ModifierAffects[ModifierInfluence.ONLY]
    }

    return ModifierAffects[ModifierInfluence.NO_AFFECT]
}

export const Modifiers: {[key: string]: Modifier} = {
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
        code :'MAIN_DOOR_INTERACTION',
        value: 'Взаимодействие с входной дверью'
    },
    'RADIO_BREATH': {
        type: ModifierType.BEHAVIOUR,
        code :'RADIO_BREATH',
        value: '"Дыхание" в радиоприёмник'
    },
    'ACTIVE_ITEMS_INTERACTION': {
        type: ModifierType.BEHAVIOUR,
        code :'ACTIVE_ITEMS_INTERACTION',
        value: 'Активное кидание предметами'
    },
    'STRONG_ITEMS_INTERACTION': {
        type: ModifierType.BEHAVIOUR,
        code :'STRONG_ITEMS_INTERACTION',
        value: 'Сильно брошенный предмет'
    }
};
