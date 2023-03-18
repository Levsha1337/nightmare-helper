import {EvidenceBOOK, EvidenceDOTS, EvidenceORB} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Thaye: Partial<Ghost> = {
    codeName: 'Thaye',
    name: 'Тайэ',
    evidences: [EvidenceORB, EvidenceBOOK, EvidenceDOTS],
    possibleSpeeds: [[50, 210]]
};

export default Object.assign({}, defaultGhostConfig, Thaye) as Ghost;
