import {compareEvidence, Evidence, EvidenceORB, EvidencePRINTS, EvidenceRADIO, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Mimic: Partial<Ghost> = {
    codeName: 'Mimic',
    name: 'Мимик',
    evidences: [EvidenceRADIO, EvidencePRINTS, EvidenceTEMP, EvidenceORB],
    evidenceRequired: EvidenceORB,
    resolve: (ghost: Ghost, evidences: Evidence[], maxCount: number) => {
        if (evidences.length > maxCount + 1 || evidences.length > ghost.evidences.length) {
            return false;
        }

        // if (ghost.evidenceRequired) {
        //     if (!evidences.find(compareEvidence(ghost.evidenceRequired))) {
        //         if (evidences.length === maxCount) return false;
        //     }
        // }

        return !evidences.find((ev) => !ghost.evidences.find(compareEvidence(ev)));
    },
    possibleSpeeds: [[0, 500]]
};

export default Object.assign({}, defaultGhostConfig, Mimic) as Ghost;
