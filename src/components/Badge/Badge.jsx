import './Badge.css'

export default function Badge({size, color}) {
    return <div className={`badge_size_${size} badge_color_${color} badge`}>Label</div>
}