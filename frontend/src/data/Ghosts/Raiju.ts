import {EvidenceDOTS, EvidenceEMF5, EvidenceORB} from '../EvidenceList';
import {defaultGhostConfig, defaultGhostSpeeds, Ghost} from '../Ghost';

const Raiju: Partial<Ghost> = {
    codeName: 'Raiju',
    name: 'Райдзю',
    evidences: [EvidenceEMF5, EvidenceORB, EvidenceDOTS],
    possibleSpeeds: [...defaultGhostSpeeds, [1.55, 2.55]]
};

export default Object.assign({}, defaultGhostConfig, Raiju) as Ghost;
