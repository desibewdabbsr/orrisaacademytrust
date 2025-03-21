import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/common/SectionTitle';
import { team } from '@/lib/data';

const expandedTeam = [
  ...team,
  {
    id: 5,
    name: "Dr. Priya Mishra",
    role: "Head of Research",
    bio: "Ph.D. in Educational Psychology with focus on learning methodologies for diverse student populations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Mr. Anand Kumar",
    role: "Community Outreach Director",
    bio: "15+ years experience in developing educational programs for rural communities.",
    image: "https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Ms. Divya Rath",
    role: "Cultural Programs Coordinator",
    bio: "Expert in Odissi dance and traditional arts, dedicated to preserving Odisha's cultural heritage.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Mr. Sanjay Behera",
    role: "Infrastructure Development Head",
    bio: "Civil engineer with expertise in designing educational facilities optimized for learning.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Leadership Team"
          subtitle="Meet the dedicated professionals who guide our institution toward excellence."
        />

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mb-8">Executive Committee</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                    <img 
                      className="h-full w-full object-cover" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 font-['Merriweather']">{member.name}</h4>
                  <p className="text-[#BE185D] mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mb-8">Department Heads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {expandedTeam.slice(4).map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                    <img 
                      className="h-full w-full object-cover" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 font-['Merriweather']">{member.name}</h4>
                  <p className="text-[#BE185D] mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="prose prose-blue max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather']">Our Team's Vision</h3>
            <p>
              The leadership at Orrisa Academy Trust brings together diverse expertise in education, 
              management, community development, and cultural preservation. Our team shares a common 
              vision of creating educational opportunities that are accessible, inclusive, and transformative.
            </p>
            <p>
              Each member contributes unique perspectives and skills to our collective mission, ensuring 
              that we approach challenges with creativity and resolve. Together, we are committed to 
              maintaining the highest standards of educational excellence while evolving to meet the 
              changing needs of our students and community.
            </p>
            <p>
              We believe in leading by example, demonstrating the values of integrity, compassion, and 
              dedication that we aim to instill in our students. Our collaborative approach extends beyond 
              our immediate team to include partnerships with parents, community leaders, and other 
              educational institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
