import {EvidenceDOTS, EvidenceEMF5, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Oni: Partial<Ghost> = {
    codeName: 'Oni',
    name: 'Они',
    evidences: [EvidenceEMF5, EvidenceTEMP, EvidenceDOTS],
    modifiersAffect: {
        EVENT_CLOUD: -1000
    }
};

export default Object.assign({}, defaultGhostConfig, Oni) as Ghost;
