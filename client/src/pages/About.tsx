import SectionTitle from '@/components/common/SectionTitle';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Orissa Academy Trust"
          subtitle="Fostering educational excellence and community development in Odisha since 2005."
        />

        <div className="mt-12 grid grid-cols-1 gap-12">
          <div className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather']">Our Story</h2>
            <p>
              Orissa Academy Trust was established in 2005 with a vision to transform education in Odisha. 
              What began as a small initiative in Angul has now grown into a trusted educational institution 
              serving numerous communities across the state.
            </p>
            <p>
              Our founders recognized the critical need for quality education that was accessible to all, 
              regardless of socioeconomic background. With dedication and community support, we've built 
              a foundation that continues to empower students through knowledge and skill development.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mt-8">Our Mission</h2>
            <p>
              To empower underserved communities through quality education, skill development, and cultural 
              enrichment, creating pathways for personal growth and social development across Odisha.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mt-8">Our Vision</h2>
            <p>
              To transform lives through education and become a catalyst for positive social change in Odisha, 
              creating a community where every individual has the opportunity to realize their full potential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mt-8">Our Core Values</h2>
            <ul>
              <li>
                <strong>Excellence:</strong> We strive for the highest standards in all our educational programs and initiatives.
              </li>
              <li>
                <strong>Inclusivity:</strong> We believe in providing equal opportunities for all, regardless of background or circumstances.
              </li>
              <li>
                <strong>Innovation:</strong> We continuously seek new approaches to education that address evolving needs.
              </li>
              <li>
                <strong>Integrity:</strong> We operate with transparency, honesty, and accountability in all our actions.
              </li>
              <li>
                <strong>Community:</strong> We value our role as community partners, working together for collective progress.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mt-8">Our Approach</h2>
            <p>
              At Orissa Academy Trust, we believe in a holistic approach to education that goes beyond textbooks and examinations. 
              Our educational methodology focuses on:
            </p>
            <ul>
              <li>Developing critical thinking and problem-solving abilities</li>
              <li>Nurturing creativity and innovation</li>
              <li>Building character and ethical values</li>
              <li>Preserving cultural heritage while embracing global perspectives</li>
              <li>Preparing students for future challenges through practical skills training</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mt-8">Our Impact</h2>
            <p>
              Over the years, we've witnessed the transformative power of education in the communities we serve:
            </p>
            <ul>
              <li>Improved literacy rates in our operational areas</li>
              <li>Higher rates of higher education enrollment among our graduates</li>
              <li>Increased employment opportunities through vocational training</li>
              <li>Enhanced community development and engagement</li>
              <li>Preservation of cultural traditions and knowledge</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mt-8">Join Our Journey</h2>
            <p>
              We invite you to become part of our mission to transform lives through education. 
              Whether as a volunteer, donor, or advocate, your support can help us extend our reach 
              and deepen our impact across Odisha.
            </p>
            <p>
              Together, we can build a future where every child has access to quality education 
              and the opportunity to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
