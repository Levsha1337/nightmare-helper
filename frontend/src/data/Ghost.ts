import {compareEvidence, Evidence} from './EvidenceList';
import {Modifier, ModifierAffect} from './Modifier';

export type PossibleGhostSpeeds = Array<[from: number, to: number]>;

export type Ghost = {
    codeName: string;
    name: string;
    evidences: Evidence[];
    evidenceRequired?: Evidence;
    huntPercents: string;
    abilities: string[];
    howToProof: string[];
    facts: string[];
    resolve: (ghost: Ghost, evidences: Evidence[], maxCount: number) => boolean;
    modifiersAffect: {[key: string]: number};
    possibleSpeeds: PossibleGhostSpeeds;
};

export const defaultGhostResolver = (ghost: Ghost, evidences: Evidence[], maxCount: number) => {
    // если улик больше чем лимит сложности или улик больше чем может быть у призрака
    if (evidences.length > maxCount || evidences.length > ghost.evidences.length) {
        // то это не этот призрак
        return false;
    }

    // если у призрака есть обязательная улика
    if (ghost.evidenceRequired) {
        // и в выбранных уликах нет этой обязательной улики
        if (!evidences.find(compareEvidence(ghost.evidenceRequired))) {
            // и выбраны все доступные на этой сложности улики
            // то это не этот призрак
            if (evidences.length === maxCount) return false;
        }
    }

    // проверяем нет ли улик, которых нет у призрака
    return !evidences.find((ev) => !ghost.evidences.find(compareEvidence(ev)));
};

// Не используем потенциальную скорость при виде игрока
// export const defaultGhostSpeeds: PossibleGhostSpeeds = [[1.55, 2.55]];
export const defaultGhostSpeeds: PossibleGhostSpeeds = [[1.55, 1.65]];

export const defaultGhostConfig: Partial<Ghost> = {
    codeName: undefined,
    name: undefined,
    evidences: [],
    huntPercents: '',
    abilities: [],
    howToProof: [],
    facts: [],
    resolve: defaultGhostResolver,
    modifiersAffect: {},
    possibleSpeeds: defaultGhostSpeeds
};
