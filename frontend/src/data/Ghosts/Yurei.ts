import {EvidenceDOTS, EvidenceORB, EvidenceTEMP} from '../EvidenceList';
import {defaultGhostConfig, Ghost} from '../Ghost';

const Yurei: Partial<Ghost> = {
    codeName: 'Yurei',
    name: 'Юрэй',
    evidences: [EvidenceORB, EvidenceTEMP, EvidenceDOTS]
};

export default Object.assign({}, defaultGhostConfig, Yurei) as Ghost;
