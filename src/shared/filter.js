export default function filter(data, filters) {

    const { duration, level, type } = filters;

    const filteredData = data.filter(cl => {

        if (duration && duration.length > 0 &&
            !((duration.includes('10') && cl.duration <= 600)
                || (duration.includes('20') && cl.duration > 600 && cl.duration < 1200)
                || (duration.includes('30') && cl.duration >= 1200 && cl.duration < 2400)
                || (duration.includes('40') && cl.duration >= 2400))) {
            return;
        }

        if (type && type.length > 0 &&
            !((type.includes('cardio') && cl.class_type === 'Cardio')
                || (type.includes('conditioning') && cl.class_type === 'Conditioning')
                || (type.includes('cycling') && cl.class_type === 'Cycling')
                || (type.includes('mindbody') && cl.class_type === 'Mind / Body'))) {
            return;
        }


        if (level && level.length > 0 &&
            !((level.includes('beginner') && (cl.level === 'Beginner' || cl.level === 'For everyone'))
                || (level.includes('intermediate') && cl.level === 'Intermediate')
                || (level.includes('advanced') && cl.level === 'Advanced'))) {
            return;
        }

        return cl;
    });
    return filteredData;
}