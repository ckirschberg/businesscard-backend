import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TestModule } from './../src/test.module';
import { BusinessCardDto } from './../src/business-card/business-card.dto';
import { BusinessCardService } from './../src/business-card/business-card.service';

describe('Business Card Controller (e2e)', () => {
  let app: INestApplication;
  let bcService: BusinessCardService;

  beforeEach(async () => {
    await bcService.deleteMany({}); // delete all businesscards.
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    bcService = moduleFixture.get(BusinessCardService);
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('Post BusinessCard controller', () => {
    it('should create a new valid business card', async () => {
        // Arrange
        const bc = new BusinessCardDto("Mathias", "Adjunkt", "mtnl@cphbusiness.dk", "Hello", "Caring for little animals");
        // Act
        const result = await request(app.getHttpServer())
                        .post("/businesscards")
                        .send(bc)
                        .expect(201) // Assert
        
        
        const res = result.body;
        expect(res._id).toBeDefined();
        expect(res.__v).toEqual(0);
      });

      it('should create a new valid business card', async () => {
        // Arrange
        const bc = new BusinessCardDto("", "Adjunkt", "mtnl@cphbusiness.dk", "Hello", "Caring for little animals");
        // Act
        const result = await request(app.getHttpServer())
                        .post("/businesscards")
                        .send(bc)
                        .expect(400) // Assert
        
        console.log(result);
        expect(result.body.message[0]).toEqual('name should not be empty')
        
      });

      
  })

  describe("Get Businesscard controller", () => {
    it("should get all businesscards", async () => {
        // Arrange
        const bc1 = new BusinessCardDto("1", "f", "fkdasælf@fjæak.dk", "fkjaæsfd", "akfjæd");
        const bc2 = new BusinessCardDto("1", "f", "fkdasælf@fjæak.dk", "fkjaæsfd", "akfjæd");
        await bcService.createBusinessCard(bc1)
        await bcService.createBusinessCard(bc2);

        //Act
        // call the endpoint to get all business cards
        


        //Assert (expect)
        // tests that I get what I should get

    });
  })
  


// Closing app after all tests => not hanging.
    afterAll(() => {
        app.close();
    });
});
