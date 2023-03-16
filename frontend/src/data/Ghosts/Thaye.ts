import {EvidenceBOOK, EvidenceDOTS, EvidenceORB} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Thaye: Partial<Ghost> = {
    codeName: 'Thaye',
    name: 'Тайэ',
    evidences: [EvidenceORB, EvidenceBOOK, EvidenceDOTS],
    possibleSpeeds: [[0.95, 2.8]]
};

export default Object.assign({}, defaultGhostConfig, Thaye) as Ghost;
