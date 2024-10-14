import { Button } from 'antd';
import { doc, writeBatch } from 'firebase/firestore';
import firestore from '~config/firestore';
import { getAllLocationSortByMark } from '~modules/location';

function Management() {
    const handleSubmit = async () => {
        // const batch = writeBatch(firestore);
        // locations.forEach((item) => {
        //     batch.set(doc(collection(firestore, 'location')), item);
        // });
        // await batch.commit();
        // console.log('Batch write completed successfully');
        // =======================================================
        // const result = await addDoc(locationCollection, {
        //     content: 'test',
        //     mark: '00',
        //     position: { left: '50%', top: '50%' },
        //     title: 'khu vuc 1',
        //     categoryPath: doc(firestore, 'category/OqUb4wsHyVLconTkFKCp'),
        // });
        // console.log(`new location:: ${result.path}`);
        // ======================================================
        const batch = writeBatch(firestore);
        (await getAllLocationSortByMark()).forEach((item) => {
            batch.update(item.ref, {
                ...item.data(),
                category: doc(firestore, 'category/N1v7eq8TLkqLJabAavHJ'),
            });
        });
        await batch.commit();
        console.log('Batch write update completed successfully');
    };

    return (
        <div>
            <Button type='primary' onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}

export default Management;
