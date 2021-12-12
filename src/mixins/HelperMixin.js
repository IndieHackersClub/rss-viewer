import truncate from 'lodash/truncate'

export default {
    methods: {
        /**
         * Trim a string to a given length.
         *
         * @param string
         * @param length
         * @returns {string}
         */
        trim(string, length = 70) {
            return truncate(string, {
                length: length + 2,
            })
        },

        capitalize(string) {
            if (!string) return ''
            string = string.toString()
            return string.toUpperCase();
        },

        capitalizeFirstLatter(string) {
            if (string.length < 1) {
                return string
            }
            return string.replace(/^./, string[0].toUpperCase());
        },
    },
}
