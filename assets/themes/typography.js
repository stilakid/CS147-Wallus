export const typography = {
    title_bold_1: {
        font: 'Outfit_700Bold',
        size: 32,
        line_height: 32,
        color: '#303030'
    },
    title_bold_2: {
        font: 'Outfit_700Bold',
        size: 28,
        line_height: 28,
        color: '#303030'
    },
    title_bold_3: {
        font: 'Outfit_700Bold',
        size: 24,
        line_height: 26,
        color: '#303030'
    },
    title_bold_4: {
        font: 'Outfit_700Bold',
        size: 20,
        line_height: 24,
        color: '#303030'
    },


    title_semibold_1: {
        font: 'Outfit_600SemiBold',
        size: 32,
        line_height: 32,
        color: '#303030'
    },
    title_semibold_2: {
        font: 'Outfit_600SemiBold',
        size: 28,
        line_height: 28,
        color: '#303030'
    },
    title_semibold_3: {
        font: 'Outfit_600SemiBold',
        size: 24,
        line_height: 24,
        color: '#303030'
    },
    title_semibold_4: {
        font: 'Outfit_600SemiBold',
        size: 20,
        line_height: 20,
        color: '#303030'
    },


    headline: {
        font: 'Outfit_700Bold',
        size: 18,
        line_height: 22,
        color: '#303030'
    },
    headline_caps: {
        font: 'Outfit_700Bold',
        size: 14,
        line_height: 18,
        color: '#303030',
        letter_spacing: 1.8,
        text_transform: 'uppercase' // This value is hardcoded in other parts of the project because of (typescript + React Native) not getting along properly. This is here just for formality + reference. The exact problem is that typescript's type widening happens when referencing this value from other parts of the document. So, it just simply does not work.
    },


    paragraph_text_1: {
        font: 'Roboto_400Regular',
        size: 18,
        line_height: 25,
        color: '#303030',
    },
    paragraph_text_2: {
        font: 'Roboto_400Regular',
        size: 16,
        line_height: 24,
        color: '#303030',
    },
    paragraph_text_3: {
        font: 'Roboto_400Regular',
        size: 14,
        line_height: 21,
        color: '#303030',
    },
    paragraph_text_4: {
        font: 'Roboto_400Regular',
        size: 12,
        line_height: 16,
        color: '#303030',
    },

    
    input_text_field: {
        font: 'Roboto_400Regular',
        size: 16,
        line_height: 24,
        color: '#303030',
    },


    label_bold_1: {
        font: 'Roboto_700Bold',
        size: 16,
        line_height: 19,
        color: '#303030', 
    },
    label_bold_2: {
        font: 'Roboto_700Bold',
        size: 14,
        line_height: 21,
        color: '#303030', 
    },
    label_bold_3: {
        font: 'Roboto_700Bold',
        size: 12,
        line_height: 16,
        // letter_spacing: 0.25,
        color: '#303030', 
    },
    label_bold_4: {
        font: 'Roboto_700Bold',
        size: 24,
        line_height: 24,
        // letter_spacing: 0.25,
        color: '#303030', 
    },

    label_semibold_1: {
        font: 'Roboto_500Medium',
        size: 16,
        line_height: 18,
        color: '#303030',
    },
    label_semibold_2: {
        font: 'Roboto_500Medium',
        size: 14,
        line_height: 18,
        color: '#303030', 
    },
    label_semibold_3: {
        font: 'Roboto_500Medium',
        size: 12,
        line_height: 16,
        color: '#303030', 
    }
}