import {EvidenceBOOK, EvidenceDOTS, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Deogen: Partial<Ghost> = {
    codeName: 'Deogen',
    name: 'Деоген',
    evidences: [EvidenceRADIO, EvidenceBOOK, EvidenceDOTS],
    evidenceRequired: EvidenceRADIO,
    possibleSpeeds: [
        [50, 70],
        [220, 260]
    ]
};

export default Object.assign({}, defaultGhostConfig, Deogen) as Ghost;
