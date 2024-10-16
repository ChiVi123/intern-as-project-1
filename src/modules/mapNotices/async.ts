import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMapNoticesEntity } from './entity';
import { getAllMapNoticesByGroup } from './repository';

export const fetchMapNotices = createAsyncThunk('mapNotices/fetchMapNotices', async () => {
    const noticeGroups: IMapNoticesEntity[][] = new Array<IMapNoticesEntity[]>();

    const snapshot1 = await getAllMapNoticesByGroup(1);
    const snapshot2 = await getAllMapNoticesByGroup(2);
    const snapshot3 = await getAllMapNoticesByGroup(3);

    const item1: IMapNoticesEntity[] = snapshot1.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const item2: IMapNoticesEntity[] = snapshot2.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const item3: IMapNoticesEntity[] = snapshot3.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    noticeGroups.push(item1, item2, item3);

    return noticeGroups;
});
