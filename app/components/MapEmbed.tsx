import { mapsEmbedUrl, mapsSearchUrl } from '../lib/site';

export default function MapEmbed() {
  return (
    <a
      href={mapsSearchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="map-wrapper"
    >
      <iframe
        src={mapsEmbedUrl}
        loading="lazy"
        title="Ubicación de CEJ Abogados"
      />
    </a>
  );
}
