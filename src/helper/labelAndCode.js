export const labels = [
    {label: 'A', color: 'yellow'},
    {label: 'B', color: '#fc194a'},
    {label: 'C', color: '#19fc59'},
    {label: 'D', color: '#F0F8FF'},
    {label: 'E', color: '#FF7F50'},
    {label: 'F', color: '#FF69B4'},
    {label: 'G', color: '#FFFACD'},
]

export const labelObj = 
    {'A': 'yellow','B': '#fc194a', 'C': '#19fc59', 'D': '#F0F8FF',
    'E': '#FF7F50','F': '#FF69B4','G': '#FFFACD'};

export const LABEL_AND_CODE = (index) => {
    return labels[index];
}