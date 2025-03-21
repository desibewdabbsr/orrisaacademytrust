import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/common/SectionTitle';
import { programs } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Educational Programs"
          subtitle="We offer a diverse range of programs designed to nurture intellectual growth and personal development."
        />

        <div className="mt-12 grid grid-cols-1 gap-12">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="h-full w-full">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover aspect-video md:aspect-square" 
                    />
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather'] mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {program.description}
                    </p>
                    <div className="prose max-w-none text-gray-600">
                      <p>
                        Our {program.title} program is designed to provide students with the knowledge and skills 
                        necessary to excel in today's competitive world. Through a combination of theoretical learning 
                        and practical applications, we ensure that our students receive a well-rounded education.
                      </p>
                      <h4 className="text-lg font-semibold mt-4 text-gray-800">Program Highlights:</h4>
                      <ul>
                        <li>Experienced faculty with expertise in the field</li>
                        <li>Modern teaching methodologies with emphasis on practical learning</li>
                        <li>Regular assessments and feedback for continuous improvement</li>
                        <li>Opportunities for extracurricular activities to develop soft skills</li>
                        <li>Career guidance and counseling to help students make informed choices</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <a href="#" className="inline-flex items-center text-[#1E40AF] hover:text-[#1D4ED8] font-medium">
                      Learn more about this program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
