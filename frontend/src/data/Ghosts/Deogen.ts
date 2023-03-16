import {EvidenceBOOK, EvidenceDOTS, EvidenceRADIO} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Deogen: Partial<Ghost> = {
    codeName: 'Deogen',
    name: 'Деоген',
    evidences: [EvidenceRADIO, EvidenceBOOK, EvidenceDOTS],
    evidenceRequired: EvidenceRADIO,
    possibleSpeeds: [
        [0.35, 0.45],
        [2.95, 3.05]
    ]
};

export default Object.assign({}, defaultGhostConfig, Deogen) as Ghost;
